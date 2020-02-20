# The MBA Fund

##Updating Portfolio page

1. Collect company data: company name, description, link to website, logo file.
2. Upload logo file to AWS S3 bucket `the-mba-fund`>`portfolio`

..For convenience, name the logo as the company name. Most file formats will work (recommended: PNG, JPG, SVG)
..Make sure the image is set to 3.

4. Open [Portfolio JSON](https://github.com/valenciafu/thembafund/blob/master/src/data/portfolio.json)
5. Format new portfolio company data in the following way:

```
,
  {
    "name": "Company name here",
    "description": "Description here",
    "link": "Link here",
    "image": "Image URL from AWS S3 here"
  }
```

##Updating Team page
