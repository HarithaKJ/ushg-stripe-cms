'use strict';

/**
 * reset-email controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::reset-email.reset-email');
