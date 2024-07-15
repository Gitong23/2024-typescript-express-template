import { Request, Response } from 'express';
import { UserRepository } from './user.repository';
import autoBind from 'auto-bind';
import { BaseController } from '@tscc/core';
import { BaseResponse } from 'core/src/response';

export class UserController extends BaseController {
  constructor(public userRepository: UserRepository) {
    super();
  }

  async getAll(req: Request, res: Response) {
    try {
      throw new Error('Method not implemented.');
      return res.json(await this.userRepository.getAll());
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }

  /**
   * Read a single user
   */
  async get(req: Request, res: Response) {
    return res.json({
      data: await this.userRepository.get(req.params.id),
    });
  }

  /**
   * Create a new user
   */
  async create(req: Request, res: Response) {
    console.log(req.body);
    return res.json({
      data: await this.userRepository.create(req.body),
    });
  }

  /**
   * Update a user
   */
  async update(req: Request, res: Response) {
    return res.json({
      data: await this.userRepository.update({
        ...req.body,
        id: req.params.id,
      }),
    });
  }

  /**
   * Delete a user
   */
  async delete(req: Request, res: Response) {
    return res.json({
      data: await this.userRepository.delete(req.params.id),
    });
  }

  //   async getAll(req: Request, res: Response) {
  //     return res.send({
  //       message: 'Get all users',
  //     });
  //   }
}
