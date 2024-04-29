import User from '../models/userInterface';
import * as UserRepository from '../repositories/userRepository';
import logger from '../utils/logger';
import * as AuthenticationService from './authenticationService';

export const findByEmail = async (email: string): Promise<User> => {
  return UserRepository.getUserByEmail(email);
};

export const createUser = async (user: User) => {
  try {
    const hashedPassword = await AuthenticationService.hashPassword(user.password);
    return await UserRepository.createUser({ ...user, password: hashedPassword });
  } catch (error) {
    console.log('Error creating User');
    throw Error('Error creating User');
  }
};

export const getProfessors = async () => {
  try {
    logger.debug('Attempting to fetch professors');
    const professors = await UserRepository.getProfessors();
    logger.info('Professors fetched successfully.');
    return professors;
  } catch (error) {
    logger.error(`Error fetching professors: ${error}`);
    throw new Error('Error occurred while fetching professors');
  }
};
