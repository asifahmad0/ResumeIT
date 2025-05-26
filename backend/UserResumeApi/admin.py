from django.contrib import admin
from UserResumeApi.models import UserResumeTitle

# Register your models here.
@admin.register(UserResumeTitle)
class resumeTitleAdmin(admin.ModelAdmin):
    list_display=['title','username','email','resume_id']

# admin = admin, pass = admin