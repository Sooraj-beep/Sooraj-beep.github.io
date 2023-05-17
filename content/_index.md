---
# Leave the homepage title empty to use the site title
title:
date: 2022-10-24
type: landing

sections:
  - block: about.biography
    id: about
    content:
      title: Biography
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
  - block: features
    content:
      title: Skills
      items:
        - name: Python
          icon: python
          icon_pack: fab
        - name: JavaScript
          icon: js
          icon_pack: fab
        - name: Java
          icon: java
          icon_pack: fab
        - name: C/C++
          icon: code
          icon_pack: fas
        - name: R
          icon: r-project
          icon_pack: fab
        - name: React
          icon: react
          icon_pack: fab
        - name: d3js
          icon: chart-simple
          icon_pack: fas
        - name: Material UI
          icon: m
          icon_pack: fas
        - name: Jest
          icon: vials
          icon_pack: fas
        - name: Cypress
          icon: robot
          icon_pack: fas
        - name: AWS
          icon: aws
          icon_pack: fab
        - name: GCP
          icon: cloud
          icon_pack: fas




  - block: experience
    content:
      title: Experience
      # Date format for experience
      #   Refer to https://wowchemy.com/docs/customization/#date-format
      date_format: Jan 2006
      # Experiences.
      #   Add/remove as many `experience` items below as you like.
      #   Required fields are `title`, `company`, and `date_start`.
      #   Leave `date_end` empty if it's your current employer.
      #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
      items:
        - title: Teaching Assistant
          company: University of Alberta - CMPUT 101 (Introduction to Computing)
          company_url: 'https://www.ualberta.ca/index.html'
          company_logo: ualberta
          location: Edmonton, Alberta
          date_start: '2023-01-01'
          date_end: '2023-04-01'
          description: |2-
              * Held lab sessions where I presented on various topics in Computing Science.
              * Answered student questions.
              * Graded Midterms, Lab work, and Assignments.

        - title: Software Development Engineer Intern
          company: Amazon
          company_url: 'https://www.amazon.ca/'
          company_logo: amazon
          location: Vancouver, British Columbia
          date_start: '2022-05-01'
          date_end: '2022-08-01'
          description: |2- 
              * Created a website allowing clients to define and manage customer cohorts, facilitating personalized recommendations.
              * Engineered API endpoints for handling CRUD requests saving 36,000 hours and $1.6 million annually.
              * Implemented authentication, authorization, and input validation to ensure app security and robustness.
              * Collaborated with colleagues to ensure client requirements were met, assuming full ownership of the project from initial design to successful implementation.

        - title: Cmputer Science Co-op
          company: Interface Fluidics Limited
          company_url: 'https://www.interfacefluidics.com/'
          location: Edmonton, Alberta
          date_start: '2021-08-01'
          date_end: '2022-04-01'
          description: |2- 
              * Refactored GraphQL queries resulting in 7500% faster data access time.
              * Revised existing image analysis module which decreased task completion time by 500% and mouse clicks by half.
              * Created an algorithm in python to numerically sort (using regex) and stack images from the database.
              * Developed an algorithm to convert images into video using Python and FFmpeg.

        - title: Full-Stack Software Developer
          company: Sparrowfi
          company_url: 'https://www.sparrowfi.com/'
          location: Remote
          date_start: '2021-05-01'
          date_end: '2021-06-01'
          description: |2- 
              * Wrote backend code that handled external HTTP requests from third party endpoints.
              * Commended for clear communication and unparalleled willingness to learn.
              * Gained experience in AWS Lambda, DynamoDB, GraphQL, and styling in CSS using Bulma.io.

        - title: Teaching Assistant
          company: Universisty of Alberta - CMPUT 272 (Formal Systems and Logic in Computing Science) 
          company_url: 'https://www.ualberta.ca/index.html'
          company_logo: ualberta
          location: Edmonton, Alberta
          date_start: '2021-01-01'
          date_end: '2021-04-01'
          description: |2- 
              * Assisted professor in setting the difficulty of the course, grading student assignments, and replying to queries.
              * Gave 200 students detailed midterm feedback which contributed to 10% higher average marks in final exam.
              * Learned how to effectively manage time between a full course load and working a part-time job.

    design:
      columns: '2'
  - block: accomplishments
    content:
      # Note: `&shy;` is used to add a 'soft' hyphen in a long heading.
      title: 'Accomplish&shy;ments'
      subtitle:
      # Date format: https://wowchemy.com/docs/customization/#date-format
      date_format: Jan 2006
      # Accomplishments.
      #   Add/remove as many `item` blocks below as you like.
      #   `title`, `organization`, and `date_start` are the required parameters.
      #   Leave other parameters empty if not required.
      #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
      items:
        - certificate_url: uploads/shaw-cert.pdf
          date_end: ''
          date_start: '2020-04-07'
          description: ''
          organization: Shaw Academy
          organization_url: https://www.shawacademy.com/
          title: Diploma in Web Development
          url: ''

        - certificate_url: uploads/microsoft-cert.pdf
          date_end: ''
          date_start: '2019-11-23'
          organization: Microsoft
          title: Microsoft Azure - Web Development
          url: https://www.edx.org/professional-certificate/uc-berkeleyx-blockchain-fundamentals


        # - certificate_url: https://www.datacamp.com
        #   date_end: '2020-12-21'
        #   date_start: '2020-07-01'
        #   description: ''
        #   organization: DataCamp
        #   organization_url: https://www.datacamp.com
        #   title: 'Object-Oriented Programming in R'
        #   url: ''

    design:
      columns: '2'
  - block: collection
    id: posts
    content:
      title: Recent Posts
      subtitle: ''
      text: ''
      # Choose how many pages you would like to display (0 = all pages)
      count: 5
      # Filter on criteria
      filters:
        folders:
          - post
        author: ""
        category: ""
        tag: ""
        exclude_featured: false
        exclude_future: false
        exclude_past: false
        publication_type: ""
      # Choose how many pages you would like to offset by
      offset: 0
      # Page order: descending (desc) or ascending (asc) date.
      order: desc
    design:
      # Choose a layout view
      view: compact
      columns: '2'
  - block: portfolio
    id: projects
    content:
      title: Projects
      filters:
        folders:
          - project
      # Default filter index (e.g. 0 corresponds to the first `filter_button` instance below).
      default_button_index: 0
      # Filter toolbar (optional).
      # Add or remove as many filters (`filter_button` instances) as you like.
      # To show all items, set `tag` to "*".
      # To filter by a specific tag, set `tag` to an existing tag name.
      # To remove the toolbar, delete the entire `filter_button` block.
      buttons:
        - name: All
          tag: '*'
        - name: Deep Learning
          tag: Deep Learning
        - name: Other
          tag: Demo
    design:
      # Choose how many columns the section has. Valid values: '1' or '2'.
      columns: '1'
      view: showcase
      # For Showcase view, flip alternate rows?
      flip_alt_rows: false
  - block: markdown
    content:
      title: Gallery
      subtitle: ''
      text: |-
        {{< gallery album="demo" >}}
    design:
      columns: '1'
  - block: collection
    id: featured
    content:
      title: Featured Publications
      filters:
        folders:
          - publication
        featured_only: true
    design:
      columns: '2'
      view: card
  - block: collection
    content:
      title: Recent Publications
      text: |-
        {{% callout note %}}
        Quickly discover relevant content by [filtering publications](./publication/).
        {{% /callout %}}
      filters:
        folders:
          - publication
        exclude_featured: true
    design:
      columns: '2'
      view: citation
  - block: collection
    id: talks
    content:
      title: Recent & Upcoming Talks
      filters:
        folders:
          - event
    design:
      columns: '2'
      view: compact
  - block: tag_cloud
    content:
      title: Popular Topics
    design:
      columns: '2'
  - block: contact
    id: contact
    content:
      title: Contact
      subtitle:
      text: |-
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mi diam, venenatis ut magna et, vehicula efficitur enim.
      # Contact (add or remove contact options as necessary)
      email: test@example.org
      phone: 888 888 88 88
      appointment_url: 'https://calendly.com'
      address:
        street: 450 Serra Mall
        city: Stanford
        region: CA
        postcode: '94305'
        country: United States
        country_code: US
      directions: Enter Building 1 and take the stairs to Office 200 on Floor 2
      office_hours:
        - 'Monday 10:00 to 13:00'
        - 'Wednesday 09:00 to 10:00'
      contact_links:
        - icon: twitter
          icon_pack: fab
          name: DM Me
          link: 'https://twitter.com/Twitter'
        - icon: skype
          icon_pack: fab
          name: Skype Me
          link: 'skype:echo123?call'
        - icon: video
          icon_pack: fas
          name: Zoom Me
          link: 'https://zoom.com'
      # Automatically link email and phone or display as text?
      autolink: true
      # Email form provider
      form:
        provider: netlify
        formspree:
          id:
        netlify:
          # Enable CAPTCHA challenge to reduce spam?
          captcha: false
    design:
      columns: '2'
---
