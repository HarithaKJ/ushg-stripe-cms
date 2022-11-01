'use strict';

/**
 * reset-email router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::reset-email.reset-email');
