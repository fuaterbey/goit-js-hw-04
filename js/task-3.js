const profile = {
  username: "Jacob",
  playTime: 300,

    changeUsername(newName) {
      profile.username = newName;
    },
   
    updatePlayTime(hours) {
        profile.playTime = profile.playTime + hours;
    },

    getInfo() {
      return `${profile.username} has ${profile.playTime} active hours!`
    },
    

};
