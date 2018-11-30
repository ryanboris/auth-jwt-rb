<!-- Answers to the Short Answer Essay Questions go here -->

1. What is the purpose of using _sessions_?

The HTTP protocol is stateless and does not have memory to persist information for any amount of time.  So, when a client changes route or location the information the server had concerning the client is lost, which also includes any information about authentication concerning the client.  If every page refresh or navigation attempt lead to all that data being lost, the user experience would decrease and become a bit more of a nuisance if you had to keep logging in to gain authorization every time you made a move across the web.  So, in order to address this issue, sessions is one way to persist that information, so that the server can read and access the authentication of the user for a time period beyond the moment in which the client has first been authorized and now has moved beyond that point of the webpage or application requesting it.  

2. What does bcrypt do to help us store passwords in a secure manner.

Bcrypt.js provides a JavaScript library that hashes passwords.  This encodes and decodes the password in the form of a derived key and represents a hashing function or Key Derivation Function.  This allows us to avoid the horrible and inappropriate means of storing passwords as plain text, implements salting both manually and automatically, and has a series of accumulative hashing rounds to provide security.  Overall, this allows us to store passwords in a secure manner for the client. 

3. What does bcrypt do to slow down attackers?

In order for a attacker to gain access to the plain text password they would have to have the exact hashing function, be aware of the specific nature of the multitude of hashing iterations that occur to hash the password, know the specific algorithm used for the hashing process, and the exact number of founds that were used to generate the hash to begin with.  Because of all of these variables and procedures that go into the hashing, the time needed to deduce all this for one password in one moment of time becomes a feat in time that is not only astronomically large but also infeasibly undesirable.   

4. What are the three parts of the JSON Web Token?

The three parts of a JSON Web Token are: the header, the payload, ahd the signature.  The header contains the algorithm and the token type, the payload includes claims(permissions) abd any other data the developer would like to store in the token, and the signature/secret which contains a unique base64 encoded secret combined with the header and the payload.