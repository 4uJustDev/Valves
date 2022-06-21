import {supabaseClient} from '../config/dbConfig.js'

const { data, error } = await supabaseClient
  .from('Item')
  .insert([
    { some_column: 'someValue', other_column: 'otherValue' },
  ])