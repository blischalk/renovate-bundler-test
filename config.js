module.exports = {
  autodiscover: false,
  logLevel: "debug",
  platform: "github",
  gitAuthor: "GitHub Bot <noreply@somedomain.com>",
  branchPrefix: "renovate-fix-",
  commitMessagePrefix: "[ISSUE-NUMBER] ",
  onboardingBranch: "renovation-onboarding",
  enabledManagers: ["bundler", "dockerfile", "npm"],
  repositories: [
    {repository: 'blischalk/renovate-bundler-test', rangeStrategy: 'update-lockfile', "bundler": { "fileMatch": ["Gemfile-current"] }}
  ]
}
