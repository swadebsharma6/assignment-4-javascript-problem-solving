
function sendNotification(email) {
      
  if (typeof email !== "string" || email.indexOf("@") === -1) {
    return "Please Provide a Valid Email!!";
  }

  // Split into username and domain
  let parts = email.split("@");
  let username = parts[0];
  let domain = parts[1];

  return `${username} sent you a email from ${domain}`
}

const email = "fahim234@hotmail.com";

const notification = sendNotification(email);

console.log("notification", notification);
