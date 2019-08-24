import moment from 'moment';

import * as StringUtils from '~/core/utils/StringUtils';

export default {
  computed: {
    postsContent() {
      const content = this.$page.posts.edges.map(edge => {
        //let date = moment(edge.node.date);

        const content = Object.assign({}, edge.node, {
          summary: `${StringUtils.shortenText(edge.node.summary, 130)}...`,
          content: `${StringUtils.shortenText(edge.node.content, 320)}...`,
          //date: date.format('MMM Do YYYY')
          date: edge.node.date
        });

        return content;
      });

      return content;
    },
    featuredContent() {
      const content = this.$page.featuredPosts.belongsTo.edges.map(edge => {
        //let date = moment(edge.node.date);

        const content = Object.assign({}, edge.node, {
          summary: `${StringUtils.shortenText(edge.node.summary, 130)}...`,
          content: `${StringUtils.shortenText(edge.node.content, 320)}...`,
          //date: date.format('MMM Do YYYY')
          date: edge.node.date
        });

        return content;
      });

      return content;
    },
    eventsContent() {
      const content = this.$page.eventsPosts.belongsTo.edges.map(edge => {
        //let date = moment(edge.node.date);

        const content = Object.assign({}, edge.node, {
          summary: `${StringUtils.shortenText(edge.node.summary, 130)}...`,
          content: `${StringUtils.shortenText(edge.node.content, 320)}...`,
          //date: date.format('MMM Do YYYY')
          date: edge.node.date
        });

        return content;
      });

      return content;
    },
    attractionsContent() {
      const content = this.$page.attractionsPosts.belongsTo.edges.map(edge => {
        //let date = moment(edge.node.date);

        const content = Object.assign({}, edge.node, {
          summary: `${StringUtils.shortenText(edge.node.summary, 130)}...`,
          content: `${StringUtils.shortenText(edge.node.content, 320)}...`,
          //date: date.format('MMM Do YYYY')
          date: edge.node.date
        });

        return content;
      });

      return content;
    },
    dealsContent() {
      const content = this.$page.dealsPosts.belongsTo.edges.map(edge => {
        //let date = moment(edge.node.date);

        const content = Object.assign({}, edge.node, {
          summary: `${StringUtils.shortenText(edge.node.summary, 130)}...`,
          content: `${StringUtils.shortenText(edge.node.content, 320)}...`,
          //date: date.format('MMM Do YYYY')
          date: edge.node.date
        });

        return content;
      });

      return content;
    }
  }
}
