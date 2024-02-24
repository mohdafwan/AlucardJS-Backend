import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/apiError.js';
import User from '../db/index.js';

const registerUser = asyncHandler(async (req, res) => {
  //get user details from frontend or postman
  //validation form -not empty
  //check if user already exists: username, email
  //check for image, check  for avatar
  //upload then to cloudnary, avatar
  //create user object -create entry in db
  //remove password and refresh  token field from response
  // check for the  creation
  // return res

  // get user details from frontend or postman
  const { fullname, email, username, password } = req.body;
  //check validation from non empty values
  if (
    [fullname, email, username, password].some((field) => field?.trim() === '')
  ) {
    throw new ApiError(400, 'All field are required');
  }
  //check the user already exists user
  const existedUser = User.findOne({
    $or: [{ username }, { email }],
  });

  if (existedUser) {
    throw new ApiError(409, 'User with email and username already exists');
  }
});

export { registerUser };
