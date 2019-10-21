from django.db import models

# Create your models here.
class users(models.Model):
    fullname=models.CharField(max_length=20)
    email=models.EmailField()
    mobile=models.IntegerField()
    password=models.CharField(max_length=50)

    def __str__(self):
        return self.fullname