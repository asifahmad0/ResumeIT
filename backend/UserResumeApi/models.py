from django.db import models

# Create your models here.

class UserResumeTitle(models.Model):
    
    title=models.CharField(max_length=50)
    username=models.CharField(max_length=50)
    email=models.EmailField()
    resume_id=models.CharField(max_length=1000)