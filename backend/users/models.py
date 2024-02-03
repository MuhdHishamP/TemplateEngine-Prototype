from django.db import models
from django.contrib.auth.models import User

# Create your models here.
#### User Profile ####     
class UserProfile(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE,null=True, blank=True, related_name="profile_user")
    name = models.TextField(blank=True, null=True)
    phone = models.TextField(blank=True, null=True)
    def __str__(self):  
          return "%s's profiles" % self.user
      
class BusinessProfiles(models.Model):
    name = models.TextField(blank=True, null=True)
    phone = models.TextField(blank=True, null=True)
    def __str__(self):  
          return "%s's profiles" % self.name
      
class GrapeJsTemplates(models.Model):
    meta_data = models.JSONField()
    def __str__(self):  
          return "%s's grapes templates" % self.id
