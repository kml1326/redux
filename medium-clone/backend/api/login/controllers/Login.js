'use strict';

/**
 * Login.js controller
 *
 * @description: A set of functions called "actions" for managing `Login`.
 */

module.exports = {

  /**
   * Retrieve login records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.login.search(ctx.query);
    } else {
      return strapi.services.login.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a login record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.login.fetch(ctx.params);
  },

  /**
   * Count login records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.login.count(ctx.query);
  },

  /**
   * Create a/an login record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.login.add(ctx.request.body);
  },

  /**
   * Update a/an login record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.login.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an login record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.login.remove(ctx.params);
  }
};
