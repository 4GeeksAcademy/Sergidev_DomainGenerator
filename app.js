let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon', 'puedes', 'cornet'];
let domain = ['com', 'es', 'io', 'us', 'net'];

const generateDomains = () => 
{
  for (let p = 0; p < pronoun.length; p++) 
  {
    for (let a = 0; a < adj.length; a++) 
    {
      for (let n = 0; n < noun.length; n++) 
      {
        for (let d = 0; d < domain.length; d++) 
        {
            let domainName = pronoun[p] + adj[a] + noun[n];
            
            if (domainName.endsWith(domain[d]))
            {
                domainName = domainName.slice(0, -domain[d].length) + "." + domain[d];
                console.log('\x1b[31m%s\x1b[0m', domainName);
            } 
            else 
            {
                domainName += "." + domain[d];
                console.log(domainName);
            }
        }
      }
    }
  }
};

generateDomains();