from django.urls import path
from UserResumeApi.views import *


urlpatterns = [
path('resume/', UserResumeList.as_view())
]