import { RequestHandler } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';
import { authServices } from './auth.services';
import config from '../../config';

//login User
const loginUser: RequestHandler = catchAsync(async (req, res, next) => {
  const result = await authServices.loginUserIntoDB(req.body);

  const { refreshToken, accessToken } = result;
  // console.log({ accessToken, refreshToken });

  res.cookie('refreshToken', refreshToken, {
    secure: config.node_env === 'production',
    httpOnly: true,
    sameSite: 'lax',
    maxAge: 1000 * 60 * 60 * 24 * 365,
  });

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Login Successfully!',
    data: {
      accessToken,
    },
  });
});

//refresh token create
const refreshToken = catchAsync(async (req, res, next) => {
  const { refreshToken } = req.cookies;
  const result = await authServices.refreshTokenIntoDB(refreshToken);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Access token is retrieved succesfully!',
    data: result,
  });
});

export const authContarollers = {
  loginUser,
  refreshToken,
};
