const axios = require('axios')
/*
 * We'll want to source
 * 1) Articles (https://developer.zendesk.com/rest_api/docs/help_center/articles)
 * 2) Posts (https://developer.zendesk.com/rest_api/docs/help_center/posts)
 * (not really sure of the difference)
 */
exports.sourceNodes = async function sourceNodes({ actions, reporter }, { domain = `https://zendesk.com` }) {
  /*
   * Source nodes here
   */
  const [articles, posts] = await Promise.all([
    axios.get(`${domain}/api/v2/help_center/en-us/articles.json`), // note, can pass start_time too
    axios.get(`${domain}/api/v2/help_center/en-us/posts.json`), // note, can pass start_time too
  ])

  /*
   * Source nodes here
   */

   /*
    * Fin.
    */
}
