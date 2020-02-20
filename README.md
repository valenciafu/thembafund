# The MBA Fund

## Updating Portfolio page
### Prepping data
1. Collect company data: company name, description, link to website, logo file.
2. Upload logo file to AWS S3 bucket `the-mba-fund`>`portfolio`
![portfolio logo upload](https://github.com/valenciafu/thembafund/blob/master/src/images/docs/portfolio-s3-upload.png)
    * For convenience, name the logo as the company name. Most file formats will work (recommended: PNG, JPG, SVG)
    * During upload, make sure `Manage public permissions` is set to `Grant public read access to this object(s)`.
    ![s3 public setting](https://github.com/valenciafu/thembafund/blob/master/src/images/docs/s3-public.png)
### Update JSON
1. Open [Portfolio JSON](https://github.com/valenciafu/thembafund/blob/master/src/data/portfolio.json). This is the data that is used to generate the Portfolio page of the website.
2. Click the pencil to edit the file.
![edit portfolio json](https://github.com/valenciafu/thembafund/blob/master/src/images/docs/edit-portfolio-json.png)
3. Place your cursor after the curly bracket of the last entry
![portfolio json place to edit](https://github.com/valenciafu/thembafund/blob/master/src/images/docs/json-last-bracket.png)
4. Copy-paste the following template (first comma included!).
```
,
  {
    "name": "TODO Company name here",
    "description": "TODO Description here",
    "link": "TODO Link here",
    "image": "TODO Image URL from AWS S3 here"
  }
```
5. Replace the TODOs with new company data. Keep the double quotes!
    * AWS S3 image url can be found by clicking the image in AWS S3 and copying the `Object URL`
    ![aws image url](https://github.com/valenciafu/thembafund/blob/master/src/images/docs/aws-url.png)
6. Save your changes: add a "commit message" detailing the change in the top field. Then click the `Commit changes` button. This will update the site with the change (takes some time to re-deploy).
![commit changes](https://github.com/valenciafu/thembafund/blob/master/src/images/docs/commit-portfolio.png)

## Updating Team page
