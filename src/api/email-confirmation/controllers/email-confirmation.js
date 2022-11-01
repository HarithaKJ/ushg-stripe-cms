'use strict';

/**
 * email-confirmation controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::email-confirmation.email-confirmation');
