# Craft Project: InVision Filter Menu

##### Thing to make 
[InVision Filter Menu](https://dribbble.com/shots/1956586-Filter-Menu?list=263083-Secret-Project)

##### Thing made
http://kevinjamesus86.github.io/craft-InVision-Filter-Menu/

##### Omissions

- radial menu button does not morph into a sweet X
- radial menu animation has been simplified (not elastic like theirs seems to be)

##### Questionable

I wasn't entirely sure what all the filter icons were supposed to do, 
soo.. I winged it. We'll say the time is 5pm, and

- ( ✓ ) = done
- ( ϟ ) = ?
- ( L ) = future
- ( ! ) = overdue

##### Learned

IE10 & IE11 don't fire animation events on pseudo elements :/ As a workaround, I 
[created a bogus animation](https://github.com/kevinjamesus86/craft-InVision-Filter-Menu/blob/master/style/style.css#L107-L120)
for the element of the same duration as the pseudo element animation.
