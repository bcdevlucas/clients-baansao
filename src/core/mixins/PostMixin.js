import moment from 'moment';

import * as StringUtils from '~/core/utils/StringUtils';

export default {
  computed: {
    postsContent() {
      const content = this.$page.posts.edges.map(edge => {
        let date = moment(edge.node.date, "YYYY-MM-DD");

        const content = Object.assign({}, edge.node, {
          summary: `${StringUtils.shortenText(edge.node.summary, 130)}`,
          content: `${StringUtils.shortenText(edge.node.content, 320)}`,
          date: date.format('MMM Do YYYY')
        });

        return content;
      });

      return content;
    },
    featuredContent() {
      const content = this.$page.featuredPosts.belongsTo.edges.map(edge => {
        let date = moment(edge.node.date, "YYYY-MM-DD");

        const content = Object.assign({}, edge.node, {
          summary: `${StringUtils.shortenText(edge.node.summary, 130)}`,
          content: `${StringUtils.shortenText(edge.node.content, 320)}`,
          date: date.format('MMM Do YYYY')
        });

        return content;
      });

      return content;
    },
    staticEventsContent() {
      const content = this.$static.eventsPosts.belongsTo.edges.map(edge => {
        let date = moment(edge.node.date, "YYYY-MM-DD");

        const content = Object.assign({}, edge.node, {
          summary: `${StringUtils.shortenText(edge.node.summary, 130)}`,
          content: `${StringUtils.shortenText(edge.node.content, 320)}`,
          date: date.format('MMM Do YYYY')
        });

        return content;
      });

      return content;
    },
    staticAttractionsContent() {
      const content = this.$static.attractionsPosts.belongsTo.edges.map(edge => {
        let date = moment(edge.node.date, "YYYY-MM-DD");

        const content = Object.assign({}, edge.node, {
          summary: `${StringUtils.shortenText(edge.node.summary, 130)}`,
          content: `${StringUtils.shortenText(edge.node.content, 320)}`,
          date: date.format('MMM Do YYYY')
        });

        return content;
      });

      return content;
    },
    staticDealsContent() {
      const content = this.$static.dealsPosts.belongsTo.edges.map(edge => {
        let date = moment(edge.node.date, "YYYY-MM-DD");

        const content = Object.assign({}, edge.node, {
          summary: `${StringUtils.shortenText(edge.node.summary, 130)}`,
          content: `${StringUtils.shortenText(edge.node.content, 320)}`,
          date: date.format('MMM Do YYYY')
        });

        return content;
      });

      return content;
    }
  }
}
