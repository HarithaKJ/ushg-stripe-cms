'use strict';

/**
 * email-confirmation service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::email-confirmation.email-confirmation');
