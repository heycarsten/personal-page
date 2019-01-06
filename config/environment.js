'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'heycarsten',
    environment,
    rootURL: '/',
    locationType: 'router-scroll',
    historySupportMiddleware: true,
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    // Router scroll opts
    // routerScroll: {
    //   delayScrollTop: true
    // },

    // Markdown source files
    'ember-cli-markdown-resolver': {
      folders: {
        pages: 'app/markdown/pages',
        fragments: 'app/markdown/fragments'
      }
    },

    showdown: {
      emoji: true,
      tasklists: true,
      tables: true,
      strikethrough: true,
      parseImgDimensions: true,
      customizedHeaderId: true,
      backslashEscapesHTMLTags: true
    },

    'ember-meta': {
      locale: 'en_CA',
      description: "Lead software developer specializing in web applications and related systems / technologies. Focuses on building trust through open and honest communication, to have effective collaborations.",
      imgSrc: 'https://heycarsten.com/images/heycarsten.jpg',
      siteName: 'Carsten Nielsen',
      title: 'Lead software developer, open learning, curious human',
      twitterUsername: '@heycarsten',
      url: 'https://heycarsten.com',
      authorId: 'heycarsten'
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
