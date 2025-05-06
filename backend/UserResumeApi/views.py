from django.shortcuts import render
from UserResumeApi.serializers import userResumeTitleSerializer
from rest_framework.generics import ListAPIView
from UserResumeApi.models import UserResumeTitle
# Create your views here.


class UserResumeList(ListAPIView):
    queryset = UserResumeTitle.objects.all()
    serializer_class = userResumeTitleSerializer
    