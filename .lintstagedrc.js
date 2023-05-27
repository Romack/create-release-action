module.exports = {
  '*.ts': ['prettier --write', 'eslint'],
  '!*.ts': 'prettier --write --ignore-unknown --no-error-on-unmatched-pattern',
};
