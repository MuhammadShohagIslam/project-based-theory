/*
   *** Error Handling Express ***
  
====> Operational Error ======>
Error that we can know will be happen
  => Invalid user inputs
  => Fail to run server
  => Failed to connect database
  => Broken links

=====> Programmatical Error =====>
 Developer create bugs, which do developer introduce
    => Using undefined variables
    => Passing string instead of object
    => Using propeties that do not exist
    => Using req.query instead of body

*/
/*
  *** we should always give error message with generic type on production level
    for that user can see real problem about this error, which solve hacking issue
  *** development mode, does not matter. above issue
  
  Global error handler control by the Programmatical, Operational 
  which solve about this error

  *** outside the application error which is Uncaught error.
  => error comes anywhere of the application
*/

/*
    =====> Unhandled Rejection =====>
  if we do not handle asynchouns process, it will be that error. Like database connection
  with multiple database

   =====> Uncaught Exception =====>
    if we do synchrouncs code, when one by one run code, then get error, it will go catch error
    it is this error

*/
/*
  MongoServerError, Zode Error, MongoError E11000, MongoCastError, ApiError,
  Validation Error, Error => come to error to Global Error Handling which handle of the controller
*/

/*
  *** production level we can not do send error just generic error like 
  'something went wrong' instead of  deatils of the error,
  development time we can send whole error with stack, details of the errpr ,essage
*/

/*
    controller -> throw new Error ('') -> Global Error handling
                -> next(') (express, if we send any thing inside, which know as error) ->  Global Error handling
                -> Custom Error method, ApiError -> thorw new ApiError() ->  Global Error handling
*/
