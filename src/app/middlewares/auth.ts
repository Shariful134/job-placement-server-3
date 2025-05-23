import { NextFunction, Request, Response } from 'express';
import catchAsync from '../utils/catchAsync';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';

import AppError from '../errors/AppError';
import { StatusCodes } from 'http-status-codes';
import { TUserRole } from '../modules/user/user.interface';
import { User } from '../modules/user/user.model';
import { CustomJwtPayload } from '../interface';

const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    console.log(token);

    //if the token is sent to the client side
    if (!token) {
      throw new AppError(StatusCodes.UNAUTHORIZED, 'Your are not Authorized!');
    }

    //new add token verify
    let decoded;
    // console.log(decoded);
    try {
      decoded = jwt.verify(
        token,
        config.jwt_access_secret as string,
      ) as CustomJwtPayload;
    } catch (error) {
      throw new AppError(StatusCodes.UNAUTHORIZED, 'Unauthorized');
    }

    const { userEmail, role, iat, exp } = decoded;
    console.log(role);

    const user = await User.isUserExistsByEmail(userEmail);

    //checking user is exists
    if (!user) {
      throw new AppError(StatusCodes.NOT_FOUND, 'User is not found!');
    }

    if (requiredRoles && !requiredRoles.includes(role as TUserRole)) {
      throw new AppError(StatusCodes.UNAUTHORIZED, 'Your are not Authorized!');
    }
    req.user = decoded;
    next();
  });
};

export default auth;
