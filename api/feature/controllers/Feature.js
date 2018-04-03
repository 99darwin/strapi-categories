'use strict';

/**
 * Feature.js controller
 *
 * @description: A set of functions called "actions" for managing `Feature`.
 */

module.exports = {

  /**
   * Retrieve feature records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    const data = await strapi.services.feature.fetchAll(ctx.query);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Retrieve a feature record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    const data = await strapi.services.feature.fetch(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Create a/an feature record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    const data = await strapi.services.feature.add(ctx.request.body);

    // Send 201 `created`
    ctx.created(data);
  },

  /**
   * Update a/an feature record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    const data = await strapi.services.feature.edit(ctx.params, ctx.request.body) ;

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Destroy a/an feature record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    const data = await strapi.services.feature.remove(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  }
};
