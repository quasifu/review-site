const dates = [
  {
    date: 'December 21, 2020',
    title: '',
    subtitle: '',
    content: ' The Pool Bid Agreement and Deposit was paid.',
    ref: '1.6',
  },
  {
    date: 'January 8, 2021',
    title: '',
    subtitle: '',
    content:
      'We met in their office and completed their Swimming Pool Construction Agreement as well as finalize finishes.',
  },
  {
    date: 'February 4, 2021',
    title: '',
    subtitle: '',
    content: 'HOA Approval',
  },
  {
    date: 'February 22, 2021',
    title: '',
    subtitle: '',
    content:
      'Jordan indicated "We are aiming to start about 5 business days after we get permits."',
  },
  {
    date: 'February 27, 2021',
    title: '',
    subtitle: '',
    content: 'Permits Approved by Town of Trophy Club ',
  },
  {
    date: 'March 8, 2021',
    title: '',
    subtitle: '',
    content: 'We are "next on the list" for the Dig',
  },
  {
    date: 'March 9, 2021',
    title: '',
    subtitle: '',
    content: 'Ryan came out to stake the yard for the dig',
  },
  {
    date: 'March 12, 2021',
    title: '',
    subtitle: '',
    content: 'We requested dig date (again).',
  },
  {
    date: 'March 24, 2021',
    title: '',
    subtitle: '',
    content: 'Dig (dug to the wrong depth).  33% paid.',
    ref: '33',
  },
  {
    date: 'March 25, 2021',
    title: '',
    subtitle: '',
    content:
      "Dig (redone to correct depth). Email correspondence regarding adding in the ClearComfort system (but they changed the contracted price at a price greater than what was stated in the contract / big sheet). Requested for them to come pump rainwater out of pool hole, they didn't and we ended up buying a pump to do it ourselves.",
  },
  {
    date: 'March 29, 2021',
    title: '',
    subtitle: '',
    content:
      'Change order sent from LC for Clear Comfort system addition and removal of slat wall',
  },
  {
    date: 'March 30, 2021',
    title: '',
    subtitle: '',
    content: 'Indicated steel would be put in.',
  },
  {
    date: 'April 7, 2021',
    title: '',
    subtitle: '',
    content: 'Working on plumbing',
  },
  {
    date: 'April 27, 2021',
    title: '',
    subtitle: '',
    content:
      'Indicated Electrician would come out next day and gunite is backed up.',
  },
  {
    date: 'May 10, 2021',
    title: '',
    subtitle: '',
    content:
      'Project Manager / Scheduler changed from Connie Kirkham to Molly Munkres ',
  },
  {
    date: 'May 19, 2021',
    title: '',
    subtitle: '',
    content:
      'Agreed via email to come clean the mud from rain collapsing the pool',
  },
  {
    date: 'June 4, 2021',
    title: '',
    subtitle: '',
    content: 'No one came',
  },
  {
    date: 'June 21,2021',
    title: '',
    subtitle: '',
    content: 'Gunite.  66% paid.',
    ref: '66',
  },
  {
    date: 'June 28, 2021',
    title: '',
    subtitle: '',
    content:
      'Molly Munkres Indicated we are next on the list for Tile and Electric',
  },
  {
    date: 'August 2, 2021',
    title: '',
    subtitle: '',
    content:
      'No work since Gunite, still waiting for Tile and Electric, planning to start the patio cover soon.',
  },
  {
    date: 'August 4, 2021',
    title: '',
    subtitle: '',
    content: 'Coping delivered.',
  },
  {
    date: 'August 10, 2021',
    title: '',
    subtitle: '',
    content:
      'Angel and sons started tile (1.5 months of no work). Asked them to fix the height of the spa (was built to 12 inches not 18).  Asked to fix blue tile in spa, they insisted it would look better once completed.',
  },
  {
    date: 'August 13, 2021',
    title: '',
    subtitle: '',
    content: 'No work on patio cover.',
  },
  {
    date: 'August 27, 2021',
    title: '',
    subtitle: '',
    content: 'Gas and electric passed inspection.',
  },
  {
    date: 'September 1, 2021',
    title: '',
    subtitle: '',
    content:
      'We were told the tile company quit and this is the cause of delays.',
  },
  {
    date: 'September 7, 2021',
    title: '',
    subtitle: '',
    content: 'Filled gas trenches with dirt.',
  },
  {
    date: 'September 14, 2021',
    title: '',
    subtitle: '',
    content: 'Fill dirt for jumping ledge or concrete was delivered.',
  },
  {
    date: 'Sept 15, 2021',
    title: '',
    subtitle: '',
    content:
      'Yard is prepped for concrete.  They mistakenly ripped up our Flagstone Patio where we paid $11K for in 2018.',
  },
  {
    date: 'September 24, 2021',
    title: '',
    subtitle: '',
    content: 'Cedar posts are installed and concrete can finish.',
  },
  {
    date: 'October 4, 2021',
    title: '',
    subtitle: '',
    content: 'Concrete Decking is poured and 3rd payment.  90% paid.',
    ref: '90',
  },
  {
    date: 'October 9, 2021',
    title: '',
    subtitle: '',
    content:
      'Angel + team are back and fixing bad tile, two months after they started the previous time.  Keep throwing chicken bones in the yard and our dogs are eating them.',
  },
  {
    date: 'October 12, 2021',
    title: '',
    subtitle: '',
    content: 'Angel + team reusing old leuders to redo spa',
  },
  {
    date: 'October 15, 2021',
    title: '',
    subtitle: '',
    content: 'Mastic was supposed to take place.',
  },
  {
    date: 'October 25, 2021',
    title: '',
    subtitle: '',
    content:
      "Mastic was partially completed.  He didn't want to move the tile to finish it.",
  },
  {
    date: 'October 26, 2021',
    title: '',
    subtitle: '',
    content:
      'Indicated issues with the mastic, not completing portions and not apply enough or removing tile mesh before applying around the spa.  See section on Spa Mastic Issues.  This has been fixed in April, 2022, 6 months after reported.',
  },
  {
    date: 'October 27, 2021',
    title: '',
    subtitle: '',
    content:
      'Patio cover was built, but with issues, fixed in January and finished in April 2022 (minus electric).',
  },
  {
    date: 'October 29, 2021',
    title: '',
    subtitle: '',
    content:
      'Asked Molly Munkres if everyone was okay, because it had been so long since Taylor Munkres had been on-site.  We did not see him again until May 11, 2022 - 6 months with no leadership on site.',
  },
  {
    date: 'November 9, 2021',
    title: '',
    subtitle: '',
    content:
      'Complained to LC about the severely chipped leuders, the different thickness in the leuders (off by a half inch) which resulted in 1 inch grout lines in places (and 1/8 grout lines in other places) for the water line tile. Started conversation with LC about the patio cover company changing from exposed beams to tongue and groove ceiling as using hardy board on parts instead of cedar).  They ended up changing it to cedar and keeping the tongue and groove.',
  },
  {
    date: 'November 23, 2021',
    title: '',
    subtitle: '',
    content:
      "We put our fence back up because our puppy kept getting out and people walking by didn't like that only the orange fabric was holding our mastiff in.",
  },
  {
    date: 'January 14, 2022',
    title: '',
    subtitle: '',
    content:
      'First complaint about building the concrete pump pad incorrectly and placing the gas line in the wrong (not to code) spot.  They have since (around April 2022) fixed it.',
  },
  {
    date: 'January 11, 2022',
    title: '',
    subtitle: '',
    content:
      'Indicated they would no longer be building our agreed upon grill station / outdoor kitchen as per the design included in the bid.  Removed the cabinet features.',
  },
  {
    date: 'January 31, 2022',
    title: '',
    subtitle: '',
    content:
      'Tile crew completed coping on jumping ledge.  Requested it be redone, see section on Jumping Ledge Issues.',
  },
  {
    date: 'February 1, 2022',
    title: '',
    subtitle: '',
    content:
      'Indicated they would get the irrigation crew out soon.  This means we have been without a sprinkler system for the front or back yard since they excavation on March 24, 2021.  We attempted to water with above ground sprinklers, but it was not sufficient and 90% of the yard is weeds.',
  },
  {
    date: 'February 11, 2022',
    title: '',
    subtitle: '',
    content: 'Electric components installed to patio cover.',
  },
  {
    date: 'May 9, 2022',
    title: '',
    subtitle: '',
    content:
      'Responded to Punchlist and that they would be giving us a credit for the outdoor kitchen instead of building it since they forgot to budget for it.  Waiting to hear credit amount.',
  },
];

export default dates;
