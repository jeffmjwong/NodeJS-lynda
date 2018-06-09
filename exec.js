const exec = require('child_process').exec;

exec("git version",(error, stdout) => {
  if (error) throw error;
  console.log('Git Version Executed');
  console.log(stdout);
});
