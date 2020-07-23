const locales = require.context('.', true, /[A-Za-z0-9-_,\s]+\.json$/i)
const messages = {}
locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key)
    }
})

export default {
    ...messages
}