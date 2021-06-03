from django.contrib import admin
from .models import Wood
# Register your models here.

class WoodAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'image')
    
admin.site.register(Wood, WoodAdmin)