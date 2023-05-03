const PAT = process.env.PAT

// import {Octokit} from '@octokit/rest';
const { Octokit } = require("@octokit/rest");

console.log({Octokit})

const octokit = new Octokit({auth: PAT});
const owner = 'HeRoMo';
const repo = 'study-github-action';
const branch = 'workflow'

async function hoge(){
  pulls = await octokit.rest.pulls.list({
    owner,
    repo,
    state: 'open',
    head: `heromo:${branch}`,
  });
  console.log({pull: pulls.data[0]})
};
hoge();
