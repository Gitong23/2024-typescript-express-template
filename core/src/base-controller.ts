import autoBind from 'auto-bind';

export abstract class BaseController {
  constructor() {
    /**
     * Using auto Bind to bind all methods to instance of the class
     * No need to use .blind(this) in this constructor
     */
    autoBind(this);
  }
}
