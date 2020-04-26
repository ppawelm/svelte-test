const ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/svelte-test',
    {
        branch: 'gh-pages',
        repo: 'git@github.com:ppawelm/svelte-test.git',
    },
    () => {
        console.log('Deploy Complete!')
    }
)
;
