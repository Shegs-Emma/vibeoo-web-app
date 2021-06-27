import axios from 'axios';

const appUrl = process.env.NODE_ENV === 'production' ? 'https://vibeoo.vercel.app' : 'http://localhost:3000'
// console.log(process.env);
type userData = {
    username?: string,
    email: string,
    password?: string,
    token?: string,
}

type userGoogleData = {
  username: string,
  email: string,
  googleId: string,
  profilePicture: string,
}

type userFbData = {
  username: string,
  facebookId: string,
  profilePicture: string,
}

const loginUser = async ({ email, password }:userData) => {
  const response = await axios({
    method: 'post',
    url: '/api/user/login',
    data: {
      email,
      password,
    },
  });
  console.log('resp-login', response);
  if (response.data.error) {
    throw new Error(response.data.errorMessage);
  }
  return response.data;
};
const registerPendingUser = async ({ email, token }:userData) => {
  const response = await axios({
    method: 'post',
    url: '/api/user/pending-signup',
    data: {
      email,
      token,
    },
  });
  console.log('resp-pend-reg', response);
  if (response.data.error) {
    throw new Error(response.data.errorMessage);
  }
  return response.data;
};

const signupViaEmail = async ({ email, token }:userData) => {
  const response = await axios({
    method: 'post',
    url: '/api/user/signup/email',
    data: { email, token },
  });
  return response.data;
};

const fetchUserFromDb = async (userId: String) => {
  //console.log(userId);
  const response = await axios({
    method: 'GET',
    url: `${process.env.NEXTAUTH_URL}/api/user/get-user/${userId}`,
  });
  return response.data;
};

const saveGoogleUser = async (googleProfile: userGoogleData) => {
  // console.log(googleProfile);
  const response = await axios({
    method: 'POST',
    url: `${process.env.NEXTAUTH_URL}/api/user/signup/gmail`,
    data: {
      ...googleProfile,
    },
  });
  console.log('google-resp', response.data);
  return response.data;
};

const saveFbUser = async (fbProfile: userFbData) => {
  // console.log(googleProfile);
  const response = await axios({
    method: 'POST',
    url: `${process.env.NEXTAUTH_URL}/api/user/signup/fb`,
    data: {
      ...fbProfile,
    },
  });
  console.log('fb-resp', response.data);
  return response.data;
};

const getUserPlaylist = async () => {
  const response = await axios.get('/api/user/management/playlist')
  return response.data;
}

const addToUserPlaylist = async (episodeUpdateInfo:{userId: string, episodeId: string}) => {
  const response = await axios({
    method: 'POST',
    url: '/api/user/management/playlist',
    data: {
      ...episodeUpdateInfo,
    },
  })
  return response.data;
}

const removeFromUserPlaylist= async (episodeUpdateInfo:{userId: string, episodeId: string}) => {
  console.log("him")
  const response = await axios({
    method: 'DELETE',
    url: '/api/user/management/playlist',
    data: {
      ...episodeUpdateInfo,
    },
  })
  return response.data;
}

export {
  loginUser, registerPendingUser, signupViaEmail, fetchUserFromDb, saveGoogleUser, saveFbUser, getUserPlaylist, addToUserPlaylist, removeFromUserPlaylist
};
