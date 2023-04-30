declare module 'zxcvbn' {
    // Define the shape of the result object returned by the zxcvbn function
    interface ZXCVBNResult {
      // Declare any additional properties or methods you want to use
      // For example, you can declare a property for password strength score
      score: number;
    }
  
    // Declare the main function exported by the zxcvbn library
    function zxcvbn(password: string): ZXCVBNResult;
  
    // Export any other types or interfaces you want to use from the zxcvbn library
    // For example, you can export the Feedback object type
    export interface ZXCVBNFeedback {
      warning: string;
      suggestions: string[];
    }
  }
  