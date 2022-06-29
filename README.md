# microservices-graphql

### Description

#### I have zoomed in on two topics namely products and reviews of any E-Commerce application.
For products, we need a way to keep track of what products we sell and all their metadata. For reviews, we need a way to offer our customer a way to review our products, give it a grade, a comment and so on and so forth. These two concepts can be seen as two isolated islands that can be maintained and developed independently. If for example, a product gets a new description there is no reason that should affect the review of said product.

So, these two concepts can be turned into into product service and a review service.

![image](https://user-images.githubusercontent.com/37039368/176523316-30a88980-e759-47bf-b129-735489e12920.png)

GraphQL and microservices are two paradigms that go really well together. GraphQL is really good at describing schemas but also stitch together different APIs (That is what we have in microservices architecture) and the end result is something that’s really useful for someone building an app as querying for data will be very simple.

