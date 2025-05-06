from rest_framework import serializers
from UserResumeApi.models import UserResumeTitle

class userResumeTitleSerializer(serializers.ModelSerializer):
    class Meta:
        model=UserResumeTitle
        fields=['title','username','email','resume_id']