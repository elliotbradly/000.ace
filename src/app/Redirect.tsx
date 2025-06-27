import React from 'react'
import { redirect } from 'next/navigation';

function Redirect() {


  var Chance = require('chance');

  // Instantiate Chance so it can be used
  var chance = new Chance();

  // Use Chance here.
  var token = chance.apple_token()


  redirect('https://tasus.org/play?idx=' + token);
  return <p>Redirecting...</p>;


}

export default Redirect
