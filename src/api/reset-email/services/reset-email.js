'use strict';

/**
 * reset-email service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::reset-email.reset-email');
