import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
  markdown: inject('markdown-resolver'),

  model() {
    return this.markdown.file('pages', 'intro');
  }
});
