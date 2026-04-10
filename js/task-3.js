const profile = {
  username: "Jacob",
  playTime: 300,

    changeUsername(newName) {
      profile.username = newName;
    },
   
    updatePlayTime(hours) {
      playTime = profile.playTime + hours;
    },

    getInfo() {
      return `${profile.username} has ${playTime} active hours!`
    },
    

};

console.log(profile.getInfo());