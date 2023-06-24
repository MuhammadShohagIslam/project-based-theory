আমার যদি validation টা business এর সাথে সম্পর্কিত থাকে, এপ্লিকেশন একই থাকবে, different organiation
ba different ডিফারেন্ট বিজনেসের perfective, you validation will be change সে ক্ষেত্রে সব সময় সার্ভিসে গিয়ে করবা,
business logic will be service file.

controller.file: controller ছোট ছোট কাজগুলো থাকে, data sanitization, access data from payload, so, littile bit work 
with controller level. so very business login work with service file.

model file: common things, যেটা application or buiness সব ক্ষেত্রে কাজে লাগে,
common জিনিস, সেটা controller, service কাজে লাগে

Pattern, Fat Model Thin Controller, big model, thin controller, 
always controller will be clean or small
which one common need
common things, which is not depened on service, we can put on model.

model like passowrd hashing, we can put on model,
