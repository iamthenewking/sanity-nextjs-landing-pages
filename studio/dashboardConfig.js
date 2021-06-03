export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60b8f4237d089f18086162a6',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-kogaocmf',
                  apiId: '32833995-7a6e-4f54-ada5-e3ab14566ec8'
                },
                {
                  buildHookId: '60b8f42363be592028506dfc',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-pafjissw',
                  apiId: '07cbac59-0e40-466c-abed-dcf5852b7064'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/iamthenewking/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-pafjissw.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
