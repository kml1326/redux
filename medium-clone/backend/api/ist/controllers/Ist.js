'use strict';

/**
 * Ist.js controller
 *
 * @description: A set of functions called "actions" for managing `Ist`.
 */

module.exports = {

  /**
   * Retrieve ist records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.ist.search(ctx.query);
    } else {
      return strapi.services.ist.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a ist record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.ist.fetch(ctx.params);
  },

  /**
   * Count ist records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.ist.count(ctx.query);
  },

  /**
   * Create a/an ist record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.ist.add(ctx.request.body);
  },

  /**
   * Update a/an ist record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.ist.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an ist record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.ist.remove(ctx.params);
  }
};
