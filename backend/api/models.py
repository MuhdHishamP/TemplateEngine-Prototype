from django.db import models
from django.contrib.auth.models import User

# Create your models here.



##########################
#### Theme Meta Data ####
##########################
class BrandMeta(models.Model):
    theme = models.JSONField(blank=True, null=True)
    def __str__(self):
        return f"{self.id} Brand Meta"
    
    
class BuilderMeta(models.Model):
    user = models.ForeignKey(User, blank=True, on_delete=models.CASCADE, null=True)
    meta_data = models.JSONField(blank=True, null=True)
    def __str__(self):
        return f"{self.id} Builder Meta"

