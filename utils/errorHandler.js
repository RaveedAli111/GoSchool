import { notification } from "antd";
import codeMessage from "./codeMessage";
import Cookies from "js-cookie";

const errorHandler = (error, emptyResult = null) => {
  const { response } = error;

  if (!response) {
    // notification.config({
    //   duration: 20,
    // });
    // notification.error({
    //   message: "No internet connection",
    //   description: "Cannot connect to the server, Check your internet network",
    // });
    return {
      success: false,
      result: emptyResult,
      message: "Cannot connect to the server, Check your internet network",
    };
  } else if (response && response.status) {
    const message = response.data && response.data.message;
    const errorText = message || codeMessage[response.status];
    const { status } = response;
    notification.config({
      duration: 3,
    });
    notification.error({
      message: `Request error ${status}`,
      description: errorText,
    });
    if (error.response.data.jwtExpired) {
      localStorage.removeItem("token");
      Cookies.remove("token");
      Cookies.remove("userInfo");
    }
    return response.data;
  } else {
    notification.config({
      duration: 3,
    });
    notification.error({
      message: "Unknown Error",
      description: "An unknown error occurred in the app, please try again. ",
    });
    return {
      success: false,
      result: emptyResult,
      message: "An unknown error occurred in the app, please try again. ",
    };
  }
};

export default errorHandler;
// import { useRouter } from "next/router";
// import { notification } from "antd";
// import codeMessage from "./codeMessage";
// import Cookies from "js-cookie";

// const errorHandler = (error, emptyResult = null) => {
//   const { response } = error;
//   const router = useRouter();

//   if (!response) {
//     notification.config({
//       duration: 20,
//     });
//     notification.error({
//       message: "No internet connection",
//       description: "Cannot connect to the server, Check your internet network",
//     });
//     return {
//       success: false,
//       result: emptyResult,
//       message: "Cannot connect to the server, Check your internet network",
//     };
//   } else if (response && response.status) {
//     const message = response.data && response.data.message;
//     const errorText = message || codeMessage[response.status];
//     const { status } = response;
//     notification.config({
//       duration: 10,
//     });
//     notification.error({
//       message: `Request error ${status}`,
//       description: errorText,
//     });
//     if (error.response.data.jwtExpired) {
//       localStorage.removeItem("token");
//       Cookies.remove("token");
//       Cookies.remove("userInfo");
//       router.push("/signPage");
//     }
//     return response.data;
//   } else {
//     notification.config({
//       duration: 10,
//     });
//     notification.error({
//       message: "Unknown Error",
//       description: "An unknown error occurred in the app, please try again. ",
//     });
//     return {
//       success: false,
//       result: emptyResult,
//       message: "An unknown error occurred in the app, please try again. ",
//     };
//   }
// };

// export default errorHandler;
